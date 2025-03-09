import { defineStore } from "pinia";
import axios from "axios";

export const useBoardStore = defineStore("board", {
  state: () => ({
    BoardList: {},
    Board: {},
    BoardComments: {},
    Register: {},
    BoardDelete: {},
  }),
  actions: {
    // 게시판 전체 목록을 가져오는 데이터
    async getBoardList(boardType, page = 1, size = 10) {
      try {
        const response = await axios.get(`/api/board/list/${boardType}?page=${page}&size=${size}`);
        if (response.data && response.data.data) {
          this.BoardList = response.data.data;  
        } else {
          console.error('게시판 목록 로딩 실패');
        }
      } catch (error) {
        console.error("Error fetching board list:", error);
      }
    },

    // 게시글 상세 목록을 가져오는 데이터
    async getBoard(boardIdx) {
      try {
        const response = await axios.get(`/api/board/read/${boardIdx}`);
        this.Board = response.data;
      } catch (error) {
        console.error("Error fetching board details:", error);
      }
    },

    // 게시글 댓글을 작성하는 데이터
    async getBoardComments(boardIdx, commentData) {
      try {
        const response = await axios.post(`/api/comment/register/${boardIdx}`, commentData);
        if (response.data && response.data.data) {
          this.BoardComments = response.data.data;
        } else {
          console.error('댓글 등록 실패');
        }
      } catch (error) {
        console.error("Error posting comment:", error);
      }
    },

    // 게시글 댓글을 수정하는 데이터
    async getCommentsUpdate(commentIdx, commentData) {
      try {
        const response = await axios.patch(`/api/comment/update/${commentIdx}`, commentData);
        this.BoardComments = response.data;
      } catch (error) {
        console.error("Error updating comment:", error);
      }
    },

    // 게시글 댓글을 삭제하는 데이터
    async getCommentsDelete(commentIdx) {
      try {
        const response = await axios.delete(`/api/comment/delete/${commentIdx}`);
        this.BoardComments = response.data;
      } catch (error) {
        console.error("Error deleting comment:", error);
      }
    },

    // 게시글 등록하는 데이터
    async getRegister(boardType, boardData) {
      try {
        const response = await axios.post(`/api/board/register/${boardType}`, boardData);
        if (response.data && response.data.data) {
          this.Register = response.data.data;
        } else {
          console.error('게시글 등록 실패');
        }
      } catch (error) {
        console.error("Error registering board:", error);
      }
    },
    // 게시글 삭제하는 데이터
    async getBoardDelete(boardIdx) {
      try {
        const response = await axios.delete(`/api/board/delete/${boardIdx}`);
        this.BoardDelete = response.data;
      } catch (error) {
        console.error("Error deleting board:", error);
      }
    },
  },
});
