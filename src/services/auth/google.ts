import axios from "libs/axios";


 const useGoogle = async () => {
   const url = await axios.get('/auth/redirect');
   const t = window.screen.width/2 -250;
   const n = window.screen.height/2 -300;
    window.open(
      url.data,
      '_blank',
      `toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=400,height=500,left=${t},top=${n}`
    );
    

};

 export default useGoogle;