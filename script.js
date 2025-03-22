const body = document.body;

function styleBody() {
    body.style.cssText = `
    background-color: #141414;
    height: 960px;
    display: flex;
    justify-content: center;
    align-items: center;
    `;
}

function card() {
    const div = document.createElement("div");
    div.style.cssText = `
    width: 384px;
    height: 611px;
    border-radius: 12px;
    padding: 40px;
    background-color: #1F1F1F;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

    const pic = document.createElement("img");
    pic.src = "/profile-pic.jpg"; 
    pic.style.cssText = `
    width: 88px;
    height: 88px;
    border-radius: 50%;
    margin-bottom: 16px;
    `;

    const title = document.createElement("h1");
    title.textContent = "Jessica Randall";
    title.style.cssText = `
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    color: white;
    `;

    const des = document.createElement("h1");
    des.textContent = "London, United Kingdom";
    des.style.cssText = `
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    color: #C4F82A;
    `;

    const bio = document.createElement("p");
    bio.textContent = "Front-end developer and avid reader.";
    bio.style.cssText = `
    font-family: 'Inter', sans-serif;
    font-weight: 400px;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    color: #FFFFFF;
    `;

    const git  = document.createElement("button")
    git.textContent = "GitHub";
    git.style.cssText = `
    width: 304px;
    height: 45px;
    border-radius: 8px;
    padding: 12px;
    gap: 8px;
    background: #333333;
    border: none;
    font-family: 'Inter', sans-serif;
   font-weight: 700px;
   font-size: 14px;
   line-height: 150%;
   letter-spacing: 0%;
   color: #FFFFFF;
   margin-top: 16px;
    `

    const Front  = document.createElement("button")
    Front.textContent = "Frontend Mentor";
    Front.style.cssText = `
    width: 304px;
    height: 45px;
    border-radius: 8px;
    padding: 12px;
    gap: 8px;
    background: #333333;
    border: none;
    font-family: 'Inter', sans-serif;
   font-weight: 700px;
   font-size: 14px;
   line-height: 150%;
   letter-spacing: 0%;
   color: #FFFFFF;
   margin-top: 16px;
    `

    const link  = document.createElement("button")
    link.textContent = "LinkedIn";
    link.style.cssText = `
    width: 304px;
    height: 45px;
    border-radius: 8px;
    padding: 12px;
    gap: 8px;
    background: #333333;
    border: none;
    font-family: 'Inter', sans-serif;
   font-weight: 700px;
   font-size: 14px;
   line-height: 150%;
   letter-spacing: 0%;
   color: #FFFFFF;
   margin-top: 16px;
    `

    const Twit  = document.createElement("button")
    Twit.textContent = "Twitter";
    Twit.style.cssText = `
    width: 304px;
    height: 45px;
    border-radius: 8px;
    padding: 12px;
    gap: 8px;
    background: #333333;
    border: none;
    font-family: 'Inter', sans-serif;
   font-weight: 700px;
   font-size: 14px;
   line-height: 150%;
   letter-spacing: 0%;
   color: #FFFFFF;
   margin-top: 16px;
    `

    const Insta  = document.createElement("button")
    Insta.textContent = "Instagram";
    Insta.style.cssText = `
    width: 304px;
    height: 45px;
    border-radius: 8px;
    padding: 12px;
    gap: 8px;
    background: #333333;
    border: none;
    font-family: 'Inter', sans-serif;
   font-weight: 700px;
   font-size: 14px;
   line-height: 150%;
   letter-spacing: 0%;
   color: #FFFFFF;
   margin-top: 16px;
    `
    

    div.append(pic);
    div.append(title);
    div.append(des);
    div.append(bio);
    div.append(git);
    div.append(Front);
    div.append(link);
    div.append(Twit);
    div.append(Insta)
    body.append(div);
}

styleBody();
card();
