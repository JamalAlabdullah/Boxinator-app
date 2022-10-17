import HomePage from '../views/HomePage'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import PackageModal from '../components/Modal/PackageModal';

describe('Home Page component', () => {
    test ('renders home page as a text', () => {

        //Arrange- Set up the test data, test conditions and test environment
        render(<HomePage/>);
    
        //ACT - Run logic that should be tested

        //ASSERT - Compare execution results with expected results
        const homePageElement =screen.getByText('Home Page');
        expect(homePageElement).toBeInTheDocument();
})
});

