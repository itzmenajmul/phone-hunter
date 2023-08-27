const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll)
}

const displayPhones = (phones, isShowAll) => {
    
    const phoneContainer = document.getElementById('phone-container');
    
    phoneContainer.textContent = '';

    // show all btn condition
    const showAllContainer = document.getElementById('show-all-container');
    if(phones.length > 12 && !isShowAll){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden');
    }

    // display only first 12 phones
    if(!isShowAll){
        phones = phones.slice(0,12);
    }

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
    // hide loading spinner
    toggleLoadingSpinner(false)
}

// handle search button
const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhone(searchText, isShowAll);
}

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById('loading-spinner');
    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }else{
        loadingSpinner.classList.add('hidden')
    }
}

// handle show all
const handleShowAll = () => {
    handleSearch(true);
}

// loadPhone()