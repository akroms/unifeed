let open = ` 
    @media (max-width:768px) {
        .navbar {
            align-items: flex-start; 
        }

        @keyframes moveRight {
            from {
                left: -130%;
            }
            to {
                left: 0%;
            }
          }

        .navbar-list {
            display:block;
            position: relative;

            animation-name: moveRight;
            animation-duration: 750ms;
        }
    
        .navbar-toggle {
            margin-top:0.5em;
        }
    }
`;

let close = `
@media (max-width:768px) {
    .navbar {
        align-items: flex-start; 
    }

    @keyframes moveLeft {
        from {
            left: 0%;
        }
        to {
            left: -140%; 
        }
    }

    .navbar-list {
        display:block;
        position:relative;

        animation-name: moveLeft;
        animation-duration: 750ms;
        left: -120%; 
    }

    .navbar-toggle {
        margin-top:0.5em;
    }
}   
`;
let displayNone = `
    .navbar-list {
        display:none;
    }
`;

let createElement = document.createElement("style");
let style = document.head.appendChild(createElement);

let toggle = document.querySelector(".navbar-toggle");

toggle.addEventListener("click", () => {
    if (style.innerHTML === open) {
        style.innerHTML = close;
        setTimeout(() => {
            style.innerHTML = displayNone;
        }, 500);
    } else {
        style.innerHTML = open;
    }
});
