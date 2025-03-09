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
    console.log("게시글 상세 데이터:", response.data); // 반환된 게시글 데이터 확인
    this.Board = response.data;  // 데이터를 저장하여 상세 페이지에 사용
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


    async getCommentsUpdate(commentIdx, commentData) {
      try {
        const response = await axios.patch(`/api/comment/update/${commentIdx}`, commentData);
        this.BoardComments = response.data;
      } catch (error) {
        console.error("Error updating comment:", error);
      }
    },

   
    async getCommentsDelete(commentIdx) {
      try {
        const response = await axios.delete(`/api/comment/delete/${commentIdx}`);
        this.BoardComments = response.data;
      } catch (error) {
        console.error("Error deleting comment:", error);
      }
    },

    
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
 
    async deletePost(postId) {
      try {
        const response = await axios.delete(`/api/board/delete/${postId}`);
        if (response.status === 200) {
          // 삭제 후 목록 갱신
          this.getBoardList();
        }
      } catch (error) {
        console.error("게시물을 삭제하는 데 실패했습니다", error);
      }
    },
    async fetchPostAndComments() {
      const route = useRoute();
      const boardStore = useBoardStore();
      const postId = route.params.id; 
    
      
      await boardStore.getBoard(postId); 
      this.post = boardStore.Board || {};
      await this.fetchComments(postId); 
}, 
  },
});
