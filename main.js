Vue.component('card', {
    props: ['card'],
    template: `
    <a :href="card.page" target="_blank">
    <div class="card">
    
    <h5>{{card.tecno}}</h5>
    <h3>{{card.title}}</h3>
     <p>{{card.describe}}</p>
        <a :href="card.link" class="linkgit" target="_blank">Ver repositório <svg class="iconopen" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></a>
        
        </div>   </a>  
    `
  });

  new Vue({ el: '#app' ,
  data:{
    cardProjects:[
    {
        id: '1',
        tecno: 'Javascript with Vue js',
        title: `To-do App`,
        describe:`A to-do list app with LocalStorage.`,
        link:'https://github.com/MrSamwell/To-do-app',
        page:'https://mrsamwell.github.io/To-do-app/'
    },
    {
        id: '2',
        tecno: 'Javascript with Vue js',
        title: `Border-radius Generator`,
        describe:`A tool for designers and developers to preview the border-radius and create forms with it.`,
        link:'https://github.com/MrSamwell/borderradius-generator',
        page:'https://mrsamwell.github.io/borderradius-generator/'
    },
    {
        id: '3',
        tecno: 'Html + Css + Javascript',
        title: `Don't divide by zero`,
        describe:`Just a calculator. But don't divide by zero, tho`,
        link:'#',
        page:'#'
    }
    ],
    cardBlog:[
        {
            id: '1',
            tecno: 'Html + Css + Javascript',
            title: `Don't divide by zero`,
            describe:`Just a calculator. But don't divide by zero, tho`,
            link:'#',
            page:'#'
        },
        {
            id: '2',
            tecno: 'Html + Css + Javascript',
            title: `Don't divide by zero`,
            describe:`Just a calculator. But don't divide by zero, tho`,
            link:'#',
            page:'#'
        },
        {
            id: '3',
            tecno: 'Html + Css + Javascript',
            title: `Don't divide by zero`,
            describe:`Just a calculator. But don't divide by zero, tho`,
            link:'',
            page:'#'
        }
        ]

}

});
