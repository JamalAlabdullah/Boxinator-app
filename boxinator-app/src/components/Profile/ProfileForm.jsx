const ProfileForm = () => {

    return (
        <form id="profForm">

            <fieldset id="profField">

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