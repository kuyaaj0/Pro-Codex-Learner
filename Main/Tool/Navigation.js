// Create Navigation
const navigation = document.createElement("div");
navigation.className = "navigation";

navigation.innerHTML = `
<button class="nav-btn prev-btn">← Previous</button>
<button class="nav-btn next-btn">Next →</button>
`;

document.body.appendChild(navigation);


// Navigation Functions
document.querySelector(".prev-btn").addEventListener("click", () => {
    if (typeof prevPage !== "undefined") {
        window.location.href = prevPage;
    }
});

document.querySelector(".next-btn").addEventListener("click", () => {
    if (typeof nextPage !== "undefined") {
        window.location.href = nextPage;
    }
});


// CSS Injection
const style = document.createElement("style");

style.innerHTML = `
.navigation {
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 30px auto;
  padding: 0 30px;
}

.nav-btn {
  padding: 12px 20px;
  border: none;
  background: #4a7cff;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s ease;
}

.nav-btn:hover {
  background: #355edb;
}

.prev-btn {
  background: #6c757d;
}

.prev-btn:hover {
  background: #5a6268;
}
`;

document.head.appendChild(style);
