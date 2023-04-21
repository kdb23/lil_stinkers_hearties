import react from 'react';
import AudioFile from './AudioFile.mp3'


function Header() {
    return(

        <div>
            <div className='animate-waving-flag justify-center leading-non flex'>
                <img src='./images/lilstinkersflag.png' />
            <div className= 'flex items-right'>
                <audio controls className='outline-none h-10 w-48' loop>
                    <source src={AudioFile} type='audio/mpeg' />
                </audio>
            </div>
            </div>
        </div>
    )
}

export default Header