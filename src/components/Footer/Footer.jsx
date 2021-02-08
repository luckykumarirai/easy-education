import './Footer.css';

const Footer = () => {

    const currentYear = new Date(Date.now()).getFullYear();

    return (
        <>
            <footer>
                <p class="copyright-text">Copyright &copy; { currentYear } - All Rights Reserved by Easy Education.</p>
            </footer>
        </>
    )
}

export default Footer
