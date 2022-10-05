const ProfileForm = () => {
    return (
        <form>

            <fieldset>
                <label htmlFor="fName">First name: </label>
                <input id="fName" type="text" placeholder="first name..." />

                <label htmlFor="lName">Last name: </label>
                <input id="lName" type="text" placeholder="last name..." />

                <label htmlFor="email">E-mail: </label>
                <input id="email" type="email" placeholder="email..." />

                <label htmlFor="password">Password: </label>
                <input id="password" type="password" placeholder="password..." />

                <label htmlFor="dateBirth">Date of birth: </label>
                <input id="dateBirth" type="date" placeholder="date og birth..." />

                <label htmlFor="country">Country: </label>
                <input id="country" type="text" placeholder="country..." />

                <label htmlFor="postCode">Postal code: </label>
                <input id="postCode" type="number" placeholder="postal code..." />

                <label htmlFor="conNumb">Contact number: </label>
                <input id="conNumb" type="number" placeholder="contact number..." />
            </fieldset>
            <button id="btnContinue" type="submit">Save Changes</button>

        </form>
    )
}

export default ProfileForm