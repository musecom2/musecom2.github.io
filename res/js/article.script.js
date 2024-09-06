$(function(){
   const urlParams = new URLSearchParams(window.location.search);
   const file = urlParams.get('file');
   console.log(file);
   
   if(file){
      //파일 읽어서 뿌리기
      $.get(file, function(text){
          const { meta, content } = parseMarkDown(text);

          //메타데이터
          const title = meta.title || 'Untitled Post';
          const date = meta.date || '날짜미상';
          const category = meta.category || '미분류';
          const image = meta.image || '/res/images/posts/default.jpg'

          //본문 출력
          const contents = marked.parse(content);
          const articleHTML = `
            <img src="${image}" alt="${image}" />
            <div>
               <span>${category}</span>
               <span>${date}</span> 
            </div>
            <h1>${title}</h1>
            <div>${contents}</div>
          `;

          $("article").html(articleHTML);
      });
   }


   function parseMarkDown(text) {
      const regex = /^---\s*([\s\S]+?)\s*---\s*([\s\S]*)$/;
      const match = text.match(regex);

      if(match) {
          const meta = {};
          match[1].split('\n').forEach(line=> {
              const [key, value] = line.split(':').map(str => str.trim());
              if(key && value){
                  //console.log(key, "-" , value);
              meta[key] = value.replace(/['"]/g, ''); //따옴표 제거 
              }
          });
          const content = match[2];
          return { meta, content };
      }else{
          return { meta: {}, content: text }
      }
  }
});