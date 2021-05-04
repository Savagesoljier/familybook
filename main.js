var imgs= ["http://3doz1i2eztq711nqzp2is66b-wpengine.netdna-ssl.com/wp-content/uploads/2017/06/Father.jpg","https://images.pexels.com/photos/51953/mother-daughter-love-sunset-51953.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.unsplash.com/photo-1581704906775-891dd5207444?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJveXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80","dog.jpeg","https://i.pinimg.com/originals/27/72/ed/2772edd652c534c175f3386e30034a62.jpg"];

var names=["Shyam Upadhyay","Rashna Bhargava", "Rayan Upadhyay", "Maximus Upadhyay", "Family Book"];

var i=0;
function next(){
    document.getElementById("Family").src=imgs[i];
    document.getElementById("name").innerHTML = names[i];
    i++;
    if(i>4){
        i=0;
    }
}