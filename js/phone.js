const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}

const displayPhones = phones => {
    
    const phoneContainer = document.getElementById('phone-container');
    
    phoneContainer.textContent = '';

    // show all btn condition
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden');
    }

    // display only first 12 phones
    phones = phones.slice(0,12);

    phones.forEach(phone => {
        console.log(phone)
        // 1 create  a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card w-auto py-3 bg-gray-200 shadow-xl`;
        phoneCard.innerHTML = `
            <figure>
                <img src="${phone.image}">
            </figure>
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `
        phoneContainer.appendChild(phoneCard)
    });
}

// handle search button
const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText)
}
// loadPhone()