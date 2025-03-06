import { defineStore } from "pinia";
import axios from "axios";

export const useBoardStore = defineStore('board', {
    state: () => ({
        // axios 결과를 처리하는 변수
        axiosStatus: false,
        // 게시판 전체 목록을 가져오는 데이터
        BoardList: [],
        // 게시글 상세 목록을 가져오는 데이터
        Board: {},
        // 게시글 댓글을 작성하는 데이터
        BoardComments: {},
        // 게시글 댓글을 수정하는 데이터
        CommentsUpdate: {},
        // 게시글 댓글을 삭제하는 데이터
        CommentsDelete: {},
        // 게시글 등록하는 데이터
        Register: {},
        // 게시글 삭제하는 데이터
        BoardDelete: {},
    }),
    getters: {
        totalBoardPage(state) {
            return state.BoardList.length;
        },
    },
    actions: {
        // 게시판 전체 목록을 가져오는 데이터
        async getBoardList({ commit }, { boardType, page = 1, size = 10 }) {
            try {
              const response = await axios.get(`/api/board/list/${boardType}?page=${page}&size=${size}`);
              commit('SET_BOARD_LIST', response.data);
            } catch (error) {
              console.error("Error fetching board list:", error);
            }
          },

        // 게시글 상세 목록을 가져오는 데이터
        async getBoard({ commit }, boardIdx) {
            try {
                const response = await axios.get(`/api/board/read/${boardIdx}`);
                commit('SET_BOARD', response.data);
            } catch (error) {
                console.error("Error fetching board details:", error);
            }
        },

        // 게시글 댓글을 작성하는 데이터
        async getBoardComments({ commit }, { boardIdx, commentData }) {
            try {
                const response = await axios.post(`/api/comment/register/${boardIdx}`, commentData);
                commit('SET_BOARD_COMMENTS', response.data);
            } catch (error) {
                console.error("Error posting comment:", error);
            }
        },

        // 게시글 댓글을 수정하는 데이터
        async getCommentsUpdate({ commit }, { commentIdx, commentData }) {
            try {
                const response = await axios.patch(`/api/comment/update/${commentIdx}`, commentData);
                commit('SET_BOARD_COMMENTS', response.data);
            } catch (error) {
                console.error("Error updating comment:", error);
            }
        },

        // 게시글 댓글을 삭제하는 데이터
        async getCommentsDelete({ commit }, commentIdx) {
            try {
                const response = await axios.delete(`/api/comment/delete/${commentIdx}`);
                commit('SET_BOARD_COMMENTS', response.data);
            } catch (error) {
                console.error("Error deleting comment:", error);
            }
        },

        // 게시글 등록하는 데이터
        async getRegister({ commit }, boardType, boardData) {
            try {
                const response = await axios.post(`/api/board/register/${boardType}`, boardData);
                commit('SET_REGISTER', response.data);
            } catch (error) {
                console.error("Error registering board:", error);
            }
        },

        // 게시글 삭제하는 데이터
        async getBoardDelete({ commit }, boardIdx) {
            try {
                const response = await axios.delete(`/api/board/delete/${boardIdx}`);
                commit('SET_DELETE', response.data);
            } catch (error) {
                console.error("Error deleting board:", error);
            }
        },
    },
    mutations: {
        SET_BOARD_LIST(state, data) {
            state.BoardList = data;
        },
        SET_BOARD(state, data) {
            state.Board = data;
        },
        SET_BOARD_COMMENTS(state, data) {
            state.BoardComments = data;
        },
        SET_REGISTER(state, data) {
            state.Register = data;
        },
        SET_DELETE(state, data) {
            state.BoardDelete = data;
        },
    }
});
