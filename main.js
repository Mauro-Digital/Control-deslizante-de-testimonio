const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

const userImg = document.querySelector('#user-img');
const userTestimonial = document.querySelector('.user-testimonial');
const userName = document.querySelector('.user-name');
const userDegree = document.querySelector('.user-degree');

const users = [
    {
        name: 'Tanya Sinclair',
        imageUrl: './images/image-tanya.jpg',
        testimonial: '“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”',
        degree: 'UX Enginner'
    },
    {
        name: 'John Tarkpor',
        imageUrl: './images/image-John.jpg',
        testimonial: '“I’m now in the job of my dreams and so excited about the future.”',
        degree: 'Junior Front-end Developer'
    },
]

const updateProfileInfo = () => {
    userImg.setAttribute('src', users[imageIndex].imageUrl)
    userTestimonial.textContent = users[imageIndex].testimonial
    userName.textContent = users[imageIndex].name
    userDegree.textContent = users[imageIndex].degree
}

let imageIndex = 0;

prevBtn.addEventListener('click', () => {
    if(imageIndex === 0){
        imageIndex = users.length - 1;    
    }else{
        imageIndex--
    }  
    updateProfileInfo();     
})

nextBtn.addEventListener('click', () => {
    if(imageIndex === users.length - 1){
        imageIndex = 0;    
    }else{
        imageIndex++
    }
    updateProfileInfo();      
})
