let form = document.querySelector('form')
let cards = document.querySelector('.cards-row')
const userManger = {
    users:[],
    init: function(){
    form.addEventListener('submit',this.submitForm.bind(this))
    

    },
    submitForm: function(e){
        
        e.preventDefault()
        console.log(this)
        // this.addUser.call(this)
        this.addUser(e)
    },
    addUser: function(e){
        console.log(e.target[0].value)
        // console.log(this,'this the this')
        
        // console.log(id)
        obj = {
            'id': this.identity,
            'name':e.target[0].value,
            'role':e.target[1].value,
            'bio':e.target[2].value,
            'photo':e.target[3].value
        }
         this.identity++
        this.users.push(obj)
        user = this.users
        // cards.innerHTML = ''
       this.renderUser(user)
        
    form.reset()
    },
    identity : 1,
    renderUser : function(u){
        cards.innerHTML = ''
        user.forEach(u => {
            
    const card = document.createElement("div");
    card.classList.add("user-card");
    const span = document.createElement('span')
    span.textContent=u.id
    card.appendChild(span)
    // avatar wrap
    const avatarWrap = document.createElement("div");
    avatarWrap.classList.add("avatar-wrap");

    const img = document.createElement("img");
    img.src = u.photo;
    img.alt = u.name;

    // img.onerror = function () {
    //     this.src = `https://ui-avatars.com/api/?name=${user.name}&background=2c2c2e&color=ccc&size=200`;
    // };

    avatarWrap.appendChild(img);

    // name
    const name = document.createElement("div");
    name.classList.add("user-name");
    name.textContent = u.name;

    // role
    const role = document.createElement("div");
    role.classList.add("user-role");
    role.textContent = u.role;

    // bio
    const bio = document.createElement("div");
    bio.classList.add("user-bio");
    bio.textContent = u.bio;

    // append all
    cards.appendChild(card)
    card.appendChild(avatarWrap);
    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(bio);
    card.addEventListener('click',this.removeUser.bind(this))
        });
       
        // this.removeUser()
    },
    removeUser : function(e){
        console.log(e)
        idy = parseInt(e.target.children[0].textContent)
        console.log(idy)
        let person = this.users
        let index = person.find(u => u.id === idy)
        person.splice(index,1)
        this.renderUser(person)
   
    },
}
userManger.init()
