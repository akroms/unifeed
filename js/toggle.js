let toggleStyle = ` 
    @media (max-width:768px) {
        .navbar {
            align-items: flex-start; 
        }
        .navbar-list {
            display:block;
        }
    
        .navbar-toggle {
            margin-top:0.5em;
        }
    }
`;

let createElement = document.createElement("style");
let style = document.head.appendChild(createElement);

let toggle = document.querySelector(".navbar-toggle");

toggle.addEventListener("click", () => {
    style.innerHTML === toggleStyle
        ? (style.innerHTML = "")
        : (style.innerHTML = toggleStyle);
});
