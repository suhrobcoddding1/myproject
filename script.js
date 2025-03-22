const body = document.body;

function styleBody() {
<<<<<<< HEAD
    body.style.cssText = `
    background-color: #141414;
    height: 960px;
    display: flex;
    justify-content: center;
    align-items: center;
=======
    body.style.cssText = `;
    background-color: #F2F2F2;
    display: flex;;
    height: 100vh;
    margin: 0;
    font-family: 'Big Shoulders';
>>>>>>> 81033b2 (tugadi)
    `;
}

function card() {
    const div = document.createElement("div");
    div.style.cssText = `
<<<<<<< HEAD
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
=======
    display: flex;
    margin-left: 260px;
    margin-top: 171px;
    `;

    const rec1 = document.createElement("div");
    const car = document.createElement("img");
    car.src = "./Group 2.svg"
    car.style.cssText = `
    margin: 48px;
    `
    const pd = document.createElement("h1")
    pd.textContent= "Sedans"
    pd.style.cssText = `
    width: 101px;
    height: 48px;
    margin-left: 47px;

    font-family: 'Big Shoulders Display', san-serif;
    font-weight: 700px;
    font-size: 40px;
    color: #F2F2F2;
    `

    const pd2 = document.createElement("p")
    pd2.textContent= "Choose a sedan for  its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
    pd2.style.cssText = `
    width: 212px;
    height: 125px;
    top: 367px;
    margin-left: 47px;
    opacity: 0.75;
    font-family: 'Lexend Deca', san-serif;
    font-weight: 400px;
    font-size: 15px;
    color: #F2F2F2;
    `

    rec1.style.cssText = `
    width: 307px;
    height: 500px;
    background-color: #E28625;

    `;

    const but = document.createElement("button")
    but.textContent = "Learn More"
    but.style.cssText= `
    width: 146px;
    height: 48px;
    border-radius: 25px;
    border: none;
    margin-left: 48px;
    color: #E28625;
    font-size: 15px;
    `

    //1 carddiki tugashi//

    const rec2 = document.createElement("div");
    rec2.style.cssText = `
    width: 307px;
    height: 500px;
    background-color: #006971;
    `;

    const car2 = document.createElement("img");
    car2.src = "./Group 3.svg"
    car2.style.cssText = `
    margin: 48px;
    `
    
    const pd1 = document.createElement("h1")
    pd1.textContent= "SUVS"
    pd1.style.cssText = `
    width: 101px;
    height: 48px;
    margin-left: 47px;

    font-family: 'Big Shoulders Display', san-serif;
    font-weight: 700px;
    font-size: 40px;
    color: #F2F2F2;
    `

    const pd3 = document.createElement("p")
    pd3.textContent= "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
    pd3.style.cssText = `
    width: 212px;
    height: 125px;
    top: 367px;
    margin-left: 47px;
    opacity: 0.75;
    font-family: 'Lexend Deca', san-serif;
    font-weight: 400px;
    font-size: 15px;
    color: #F2F2F2;
    `
    
    const but1 = document.createElement("button")
    but1.textContent = "Learn More"
    but1.style.cssText= `
    width: 146px;
    height: 48px;
    border-radius: 25px;
    border: none;
    margin-left: 48px;
    color: #006971;
    font-size: 15px;
    `

    //2 carddiki tugashi//
    const rec3 = document.createElement("div");
    rec3.style.cssText = `
    width: 307px;
    height: 500px;
    background-color: #004140;
    `;

    const car3 = document.createElement("img");
    car3.src = "./Group 4.svg"
    car3.style.cssText = `
    margin: 48px;
    `
    
    const pd5 = document.createElement("h1")
    pd5.textContent= "Luxury"
    pd5.style.cssText = `
    width: 101px;
    height: 48px;
    margin-left: 47px;

    font-family: 'Big Shoulders Display', san-serif;
    font-weight: 700px;
    font-size: 40px;
    color: #F2F2F2;
    `

    const pd4 = document.createElement("p")
    pd4.textContent= "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. "
    pd4.style.cssText = `
    width: 212px;
    height: 125px;
    top: 367px;
    margin-left: 47px;
    opacity: 0.75;
    font-family: 'Lexend Deca', san-serif;
    font-weight: 400px;
    font-size: 15px;
    color: #004140;
    `
    
    const but2 = document.createElement("button")
    but2.textContent = "Learn More"
    but2.style.cssText= `
    width: 146px;
    height: 48px;
    border-radius: 25px;
    border: none;
    margin-left: 48px;
    color: #006971;
    font-size: 15px;
    `

    //3 carddiki tugashi//
    rec3.append(car3);
    rec2.append(car2);
    rec1.append(car);
    rec2.append(pd1);
    rec2.append(pd3);
    rec3.append(pd5);
    rec3.append(pd4);
    rec1.append(pd);
    rec1.append(pd2);
    rec1.append(but); 
    rec2.append(but1);
    rec3.append(but2);
    div.append(rec1);
    div.append(rec2);
    div.append(rec3);
    body.append(div);  
>>>>>>> 81033b2 (tugadi)
}

styleBody();
card();
