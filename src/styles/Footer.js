$primarycolor: #C7A22D;
$secondarycolor: red;

.menu {
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: flex-end;
    width: 100%;
    margin: auto;
    background-color: #c7a22d;
    padding: 20px 15px 20px 30px;
    &__logo {
        width: 15%;
        margin-right: 30px;
    }
    &__links {
        width: 85%;
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
        list-style-type: none;
        font: Verdana, Georgia, sans-serif;
        text-transform: uppercase;
        font-weight: bold;
    }
    &__link {
        color: #000!important;
        text-decoration: none!important;
        &:hover {
            color: red!important;
        }
    }
}

.basket {
    position: relative;
    font-size: 1.3rem;
    &__nb {
        position: absolute;
        bottom: 50%;
        left: 100%;
        color: $secondarycolor!important;
        font-size: 1rem;
    }
}