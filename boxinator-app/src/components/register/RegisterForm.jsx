const RegisterForm = () => {

    return (
        <>
            <h2>What's your name?</h2>
            <form>
                <fieldset>
                    <input type="text" placeholder="Enter your name here..." />
                </fieldset>

                <button id="btnContinue" type="submit">Continue</button>
            </form>
        </>
    )

}

export default RegisterForm