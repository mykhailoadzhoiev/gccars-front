import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const User = () => {

    const history = useNavigate()

    const { auth } = useSelector(state => state.user)

    const goCabinet = () => {
        if(auth) {
            history({pathname: '/cabinet'})
        } else {
            history({pathname: '/'})
        }
        
    }

    return (
        <svg onClick={() => goCabinet()} width="2vw" viewBox="0 0 67 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M66.3302 65.4739C57.7492 73.448 46.4679 77.8802 34.7527 77.8802C23.0375 77.8802 11.7562 73.448 3.17518 65.4739C3.16187 65.128 3.14854 64.7821 3.14854 64.4295C3.13762 60.0561 4.0188 55.7263 5.73822 51.7049C7.45764 47.6834 9.97919 44.0547 13.1488 41.0406C15.5657 44.5337 18.7939 47.3887 22.5567 49.3606C26.3194 51.3326 30.5043 52.3627 34.7527 52.3627C39.001 52.3627 43.186 51.3326 46.9487 49.3606C50.7114 47.3887 53.9397 44.5337 56.3566 41.0406C59.5262 44.0547 62.0477 47.6834 63.7671 51.7049C65.4866 55.7263 66.3678 60.0561 66.3568 64.4295C66.3568 64.7821 66.3435 65.128 66.3302 65.4739ZM34.4133 47.5397C22.2108 47.5397 12.3237 37.5016 12.3237 25.122C12.3021 22.2002 12.8563 19.3029 13.9547 16.5953C15.0531 13.8878 16.6743 11.4231 18.7256 9.34197C20.7768 7.26086 23.218 5.60406 25.9097 4.4663C28.6015 3.32855 31.491 2.73209 34.4133 2.71094C46.6092 2.71094 56.503 12.7423 56.503 25.122C56.503 37.5016 46.6092 47.5397 34.4133 47.5397Z" fill="#DB9556" />
            <path fillRule="evenodd" clipRule="evenodd" d="M63.9982 63.1418C55.4171 71.116 44.1359 75.5482 32.4207 75.5482C20.7054 75.5482 9.42418 71.116 0.843147 63.1418C0.82984 62.7959 0.816507 62.4501 0.816507 62.0975C0.805586 57.724 1.68677 53.3943 3.40619 49.3728C5.12561 45.3514 7.64716 41.7227 10.8167 38.7085C13.2337 42.2017 16.4619 45.0566 20.2246 47.0286C23.9874 49.0006 28.1723 50.0307 32.4207 50.0307C36.669 50.0307 40.8539 49.0006 44.6167 47.0286C48.3794 45.0566 51.6076 42.2017 54.0246 38.7085C57.1941 41.7227 59.7157 45.3514 61.4351 49.3728C63.1545 53.3943 64.0357 57.724 64.0248 62.0975C64.0248 62.4501 64.0115 62.7959 63.9982 63.1418ZM32.0813 45.2077C19.8788 45.2077 9.99172 35.1696 9.99172 22.7899C9.97005 19.8682 10.5243 16.9709 11.6227 14.2633C12.7211 11.5557 14.3423 9.09105 16.3935 7.00994C18.4448 4.92882 20.886 3.27203 23.5777 2.13427C26.2695 0.996514 29.159 0.400056 32.0813 0.378906C44.2772 0.378906 54.1709 10.4103 54.1709 22.7899C54.1709 35.1696 44.2772 45.2077 32.0813 45.2077Z" fill="#DB9556" />
        </svg>

    )
}

export default User
