// Pre-defined Users (Yahan Password/Username change kar sakte hain)
const users = [
    { username: "CH ZOHAIR", password: "1435", role: "admin", name: "Owner (Admin)" },
    { username: "cashier", password: "111", role: "cashier", name: "Cashier 1" }
];

let currentUser = null;
let currentOrderItems = [];
let total = 0;

// User Login Logic
function loginUser() {
    const userIn = document.getElementById('username').value;
    const passIn = document.getElementById('password').value;
    
    const foundUser = users.find(u => u.username === userIn && u.password === passIn);
    
    if (foundUser) {
        currentUser = foundUser;
        document.getElementById('login-modal').style.display = 'none';
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('logged-user').innerText = `${foundUser.name} (${foundUser.role.toUpperCase()})`;
        
        if (foundUser.role === 'admin') {
            document.querySelector('.history-section').style.display = 'block';
            document.getElementById('admin-clear-btn').style.display = 'inline-block';
        } else {
            document.querySelector('.history-section').style.display = 'none';
            document.getElementById('admin-clear-btn').style.display = 'none';
        }
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}

function logoutUser() {
    currentUser = null;
    document.getElementById('login-modal').style.display = 'flex';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('login-error').style.display = 'none';
}

// Menu Data
const menuData = [
    {
        category: "Special Pizzas",
        items: [
            { name: "Cheeze Lab Special Pizza", prices: { Small: 600, Medium: 1300, Large: 1850, XL: 2150 } },
            { name: "Malai Boti Pizza", prices: { Small: 600, Medium: 1250, Large: 1800, XL: 2150 } },
            { name: "Kabab Crust Pizza", prices: { Small: 600, Medium: 1250, Large: 1800, XL: 2150 } },
            { name: "Crown Crust Pizza", prices: { Small: 600, Medium: 1250, Large: 1899, XL: 2150 } },
            { name: "Chicken Stuffer Pizza", prices: { Small: 600, Medium: 1250, Large: 1899, XL: 2150 } },
            { name: "Square Pizza (Mix)", prices: { Small: 600, Medium: 1250, Large: 1800, XL: 2150 } }
        ]
    },
    {
        category: "Vintage Pizzas",
        items: [
            { name: "Chicken Tikka Pizza", prices: { Small: 500, Medium: 1050, Large: 1399, XL: 1850 } },
            { name: "Chicken Fajita Pizza", prices: { Small: 500, Medium: 1050, Large: 1399, XL: 1850 } },
            { name: "Pepperoni Slice Pizza", prices: { Small: 500, Medium: 1050, Large: 1399, XL: 1850 } },
            { name: "Hot & Spicy Pizza", prices: { Small: 500, Medium: 1050, Large: 1399, XL: 1850 } },
            { name: "Sausages Pizza", prices: { Small: 500, Medium: 1050, Large: 1399, XL: 1850 } },
            { name: "Thin Crust Pizza", prices: { Small: 500, Medium: 1050, Large: 1399, XL: 1850 } }
        ]
    },
    {
        category: "Burgers & Wraps",
        items: [
            { name: "Tower Burger", price: 550 },
            { name: "Zinger Burger", price: 350 },
            { name: "Cheese Zinger Burger", price: 400 },
            { name: "Grill Burger", price: 450 },
            { name: "Chapli Kabab Burger", price: 300 },
            { name: "Patty Burger", price: 290 },
            { name: "Cheeze Lab Special Sandwich", price: 600 },
            { name: "Crispy Sandwich", price: 550 },
            { name: "Grill Sandwich", price: 550 },
            { name: "Cheeze Lab Special Wrap", price: 550 },
            { name: "Grill Wrap", price: 550 },
            { name: "BBQ Wrap", price: 500 }
        ]
    },
    {
        category: "Fries & Pasta",
        items: [
            { name: "Plain Fries", prices: { Half: 220, Full: 320 } },
            { name: "Mayo Fries", prices: { Half: 250, Full: 450 } },
            { name: "Pizza Fries", prices: { Half: 400, Full: 750 } },
            { name: "Loaded Fries", prices: { Half: 350, Full: 600 } },
            { name: "Loaded Zinger Fries", prices: { Half: 370, Full: 620 } },
            { name: "Masala Fries", prices: { Half: 230, Full: 330 } },
            { name: "Cheeze Lab Special Pasta", prices: { Half: 450, Full: 800 } },
            { name: "Creamy Pasta", prices: { Half: 440, Full: 790 } },
            { name: "White Sauce Pasta", prices: { Half: 440, Full: 790 } }
        ]
    },
    {
        category: "Shawarma & Rolls",
        items: [
            { name: "Chicken Shawarma", price: 220 },
            { name: "Zinger Shawarma", price: 250 },
            { name: "Malai Boti Shawarma", price: 260 },
            { name: "Shawarma Platter", price: 450 },
            { name: "Crispy Roll", price: 260 },
            { name: "Malai Boti Roll", price: 280 },
            { name: "Kabab Roll", price: 250 },
            { name: "Spin Roll Special", price: 500 }
        ]
    },
    {
        category: "Wings & Nuggets",
        items: [
            { name: "Hot Wings", prices: { "06 Pcs": 320, "12 Pcs": 600 } },
            { name: "Oven Baked Wings", prices: { "06 Pcs": 320, "12 Pcs": 600 } },
            { name: "Honey Wings", prices: { "06 Pcs": 349, "12 Pcs": 650 } },
            { name: "Hot Shots", prices: { "06 Pcs": 300, "12 Pcs": 550 } },
            { name: "Nuggets", prices: { "06 Pcs": 250, "12 Pcs": 480 } }
        ]
    },
    {
        category: "Signature Shakes",
        items: [
            { name: "Strawberry Shake", price: 280 },
            { name: "Banana Shake", price: 220 },
            { name: "Apple Shake", price: 220 },
            { name: "Mango Shake", price: 220 },
            { name: "Khoya Khajoor Shake", price: 320 },
            { name: "Dairy Milk Shake", price: 400 },
            { name: "Pista Shake", price: 400 }
        ]
    },
    {
        category: "Cold Drinks",
        items: [
            { name: "Coke (500 ML)", price: 130 },
            { name: "Sprite (500 ML)", price: 130 },
            { name: "Mint Sprite (500 ML)", price: 130 },
            { name: "Mineral Water (500 ML)", price: 70 },
            { name: "Coke (1 Liter)", price: 180 },
            { name: "Sprite (1 Liter)", price: 180 },
            { name: "Mint Sprite (1 Liter)", price: 180 },
            { name: "Coke (1.5 Liter)", price: 210 },
            { name: "Sprite (1.5 Liter)", price: 210 },
            { name: "Mint Sprite (1.5 Liter)", price: 210 },
            { name: "Mineral Water (1.5 Liter)", price: 120 },
            { name: "Coke (2 Liter)", price: 240 },
            { name: "Sprite (2 Liter)", price: 240 },
            { name: "Mint Sprite (2 Liter)", price: 240 }
        ]
    },
    {
        category: "Special Deals",
        items: [
            { name: "Student Deal", price: 650 },
            { name: "Couple Deal", price: 1299 },
            { name: "Family Deal", price: 3499 },
            { name: "Birthday Deal", price: 6999 },
            { name: "Big Deal", price: 3199 },
            { name: "Snack Deal", price: 499 }
        ]
    }
];

function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = '';

    menuData.forEach(cat => {
        let catHTML = `<div style="margin-bottom: 20px;">
            <h3 style="background:#ff4757; color:white; padding:5px 10px; border-radius:4px;">${cat.category}</h3>
            <div style="display:flex; flex-wrap:wrap; gap:10px;">`;

        cat.items.forEach(item => {
            catHTML += `<div class="card" style="width:220px;">
                <h4>${item.name}</h4>`;

            if (item.prices) {
                for (let size in item.prices) {
                    catHTML += `<button onclick="addToOrder('${item.name} (${size})', ${item.prices[size]})" style="margin:2px; font-size:11px;">
                        ${size}: Rs.${item.prices[size]}
                    </button>`;
                }
            } else {
                catHTML += `<p>Rs. ${item.price}</p>
                <button onclick="addToOrder('${item.name}', ${item.price})">Add to Order</button>`;
            }
            catHTML += `</div>`;
        });

        catHTML += `</div></div>`;
        container.innerHTML += catHTML;
    });
}

// Add Item To Order
function addToOrder(itemName, price) {
    currentOrderItems.push({ name: itemName, price: price });
    renderOrderList();
}

// Render Order List & Total
function renderOrderList() {
    let orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    total = 0;

    currentOrderItems.forEach((item, index) => {
        total += item.price;

        let li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';
        li.style.marginBottom = '8px';

        li.innerHTML = `
            <span>${item.name} - Rs. ${item.price}</span>
            <button onclick="removeFromOrder(${index})" style="background: #ff4757; color: white; border: none; border-radius: 3px; padding: 2px 6px; cursor: pointer; font-weight: bold; font-size: 12px;">❌</button>
        `;
        orderList.appendChild(li);
    });

    document.getElementById('total-price').innerText = total;
}

// Remove Item Less
function removeFromOrder(index) {
    currentOrderItems.splice(index, 1);
    renderOrderList();
}

// Print Only
function printOnly() {
    if (currentOrderItems.length === 0) {
        alert("Pehle order me items add karein!");
        return;
    }
    setTimeout(() => {
        window.print();
    }, 100);
}

// Save Paid Order
function savePaidOrder() {
    if (currentOrderItems.length === 0) {
        alert("Pehle order me items add karein!");
        return;
    }

    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-GB') + " " + now.toLocaleTimeString();
    let itemNames = currentOrderItems.map(i => `${i.name} (Rs.${i.price})`).join(" | ");

    let paidOrder = {
        date: formattedDate,
        items: itemNames,
        total: total
    };

    let history = JSON.parse(localStorage.getItem('cheezeLabPermanentOrders')) || [];
    history.push(paidOrder);
    localStorage.setItem('cheezeLabPermanentOrders', JSON.stringify(history));

    currentOrderItems = [];
    renderOrderList();

    displayHistory();
    alert("Payment Received & Permanent Log Updated!");
}

function displayHistory() {
    let history = JSON.parse(localStorage.getItem('cheezeLabPermanentOrders')) || [];
    let tableBody = document.getElementById('history-table-body');
    tableBody.innerHTML = '';

    [...history].reverse().forEach(order => {
        let row = `<tr>
            <td style="font-size:13px; font-weight:bold;">${order.date}</td>
            <td style="font-size:13px;">${order.items}</td>
            <td style="font-size:13px; color:green; font-weight:bold;">Rs. ${order.total}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function clearHistoryByAdmin() {
    if (currentUser && currentUser.role === 'admin') {
        let confirmDelete = confirm("⚠️ Warning: Kya aap waqai tamaam Sales History permanently delete karna chahte hain?");
        if (confirmDelete) {
            localStorage.removeItem('cheezeLabPermanentOrders');
            displayHistory();
            alert("History Delete Ho Gayi Hai!");
        }
    } else {
        alert("Aap ke paas History delete karne ki permission nahi hai!");
    }
}

function exportToCSV() {
    let history = JSON.parse(localStorage.getItem('cheezeLabPermanentOrders')) || [];
    
    if (history.length === 0) {
        alert("Download karne ke liye koi history nahi hai!");
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,Date & Time,Items Ordered,Total Amount (PKR)\n";

    history.forEach(row => {
        let itemsClean = `"${row.items.replace(/"/g, '""')}"`;
        csvContent += `${row.date},${itemsClean},${row.total}\n`;
    });

    let encodedUri = encodeURI(csvContent);
    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    
    const fileName = `Cheeze_Lab_Sales_Report_${new Date().toISOString().slice(0, 10)}.csv`;
    link.setAttribute("download", fileName);
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

window.onload = function() {
    renderMenu();
    displayHistory();
};