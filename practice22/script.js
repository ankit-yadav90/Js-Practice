let users = [
  {
    name: "Ankit Yadav",
    pic: "https://plus.unsplash.com/premium_photo-1664471482664-bd553e4d0d84?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Silent choices in a loud world | Not for everyone"
  },
  {
    name: "Priya Sharma",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Dreamer ✨ | Coffee lover ☕ | Bookworm 📚"
  },
  {
    name: "Rahul Verma",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Coder 💻 | Music addict 🎶 | Night owl 🌙"
  },
  {
    name: "Sneha Kapoor",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Smile more, worry less 😊 | Positive vibes only 🌸"
  },
  {
    name: "Amit Singh",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Traveler 🌍 | Foodie 🍕 | Fitness freak 🏋️‍♂️"
  },
  {
    name: "Kavya Nair",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Lost in music 🎧 | Loves sunsets 🌅 | Free spirit 🕊️"
  },
  {
    name: "Rohit Mehra",
    pic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0",
    bio: "Hustler 💪 | Gamer 🎮 | Always curious 🔍"
  }
];

function showUsers(arr) {
  arr.forEach((user) => {

    // card div
    const card = document.createElement("div");
    card.classList.add("card");

    // image
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");

    // blurred layer (background image)
    const blurLayer = document.createElement("div");
    blurLayer.style.backgroundImage = `url(${user.pic})`;
    blurLayer.classList.add("blurred-layer");

    // content div
    const content = document.createElement("div");
    content.classList.add("content");

    // h3 element
    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    // p element
    const p = document.createElement("p");
    p.textContent = user.bio;

    // structure banani (nesting)
    content.appendChild(h3);
    content.appendChild(p);

    card.appendChild(img);
    card.appendChild(blurLayer);
    card.appendChild(content);

    document.body.appendChild(card);
  });
}

showUsers(users);
