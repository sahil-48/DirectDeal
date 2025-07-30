const propertyData = [
  {
    title: "2BHK Flat in Bhopal",
    location: "Indrapuri",
    price: "₹25 Lakhs",
    type: "Flat",
    image: "https://via.placeholder.com/300x200?text=Flat+Bhopal"
  },
  {
    title: "Residential Plot in Ujjain",
    location: "Dewas Road",
    price: "₹12 Lakhs",
    type: "Plot",
    image: "https://via.placeholder.com/300x200?text=Plot+Ujjain"
  },
  {
    title: "Open Land near Guna",
    location: "Bypass Road",
    price: "₹18 Lakhs",
    type: "Land",
    image: "https://via.placeholder.com/300x200?text=Land+Guna"
  },
  {
    title: "Luxury Villa in Indore",
    location: "Vijay Nagar",
    price: "₹80 Lakhs",
    type: "Villa",
    image: "https://via.placeholder.com/300x200?text=Villa+Indore"
  },
  {
    title: "3BHK Apartment in Delhi",
    location: "Dwarka",
    price: "₹95 Lakhs",
    type: "Flat",
    image: "https://via.placeholder.com/300x200?text=Apartment+Delhi"
  },
  {
    title: "Commercial Land in Bhopal",
    location: "MP Nagar",
    price: "₹1.2 Crore",
    type: "Land",
    image: "https://via.placeholder.com/300x200?text=Commercial+Bhopal"
  }
];

function showSection(id) {
  const sections = ["homeSection", "loginSection", "registerSection", "listSection"];
  sections.forEach(sec => document.getElementById(sec).style.display = "none");
  document.getElementById(id).style.display = "block";
}

function displayProperties(list = propertyData) {
  const container = document.getElementById("propertyList");
  container.innerHTML = "";
  if (!list.length) {
    container.innerHTML = "<p style='text-align:center;'>No properties found.</p>";
    return;
  }

  list.forEach((prop) => {
    container.innerHTML += `
      <div class="property-card">
        <img src="${prop.image}" alt="${prop.title}" />
        <h3>${prop.title}</h3>
        <p><strong>Location:</strong> ${prop.location}</p>
        <p><strong>Price:</strong> ${prop.price}</p>
        <p><strong>Type:</strong> ${prop.type}</p>
        <button onclick="contactSeller()">Contact Seller</button>
      </div>
    `;
  });
}

function searchProperties() {
  const term = document.getElementById("searchInput").value.toLowerCase().trim();
  const results = propertyData.filter(
    p => p.title.toLowerCase().includes(term) ||
         p.location.toLowerCase().includes(term) ||
         p.type.toLowerCase().includes(term)
  );
  displayProperties(results);
}

function contactSeller() {
  if (!localStorage.getItem("loggedIn")) {
    alert("Please login to contact the seller.");
  } else {
    alert("Seller contact feature coming soon.");
  }
}

document.getElementById("listForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (!localStorage.getItem("loggedIn")) {
    alert("You must be logged in to list a property.");
    return;
  }
  const inputs = this.querySelectorAll("input, select");
  const newProperty = {
    title: inputs[0].value,
    location: inputs[1].value,
    price: inputs[2].value,
    type: inputs[3].value,
    image: inputs[4].value || "https://via.placeholder.com/300x200?text=New+Property"
  };
  propertyData.push(newProperty);
  alert("Property listed successfully!");
  this.reset();
  showSection("homeSection");
  displayProperties();
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem("loggedIn", "true");
  alert("Login successful!");
  showSection("homeSection");
});

document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.setItem("loggedIn", "true");
  alert("Registered successfully!");
  showSection("homeSection");
});

window.onload = () => {
  displayProperties();
  showSection("homeSection");
};
