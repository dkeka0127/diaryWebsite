import React from 'react';
import '../../css/Main.css';
import logoIMG from '../../img/logo.jpeg';

// DIARY 화면

function Main() {
    return (
        <div className="Main">
            <header className="Header">
                <img src={logoIMG} />
                <p>DayByDay</p>
            </header>

            <content className="Content">
                <div>
                    <content1 className="Content_Calendar">
                        <div>
                            <h3>
                            diary1<br />
                            </h3>
                        </div>
                    </content1>
                    <content2 className="Content_Note">
                        <div>
                            <h3>
                            diary2<br />
                            </h3>
                        </div>
                    </content2>
                </div>
            </content>

            <footer className="Main_Footer">

            </footer>
        </div>
    );
}

export default Main;
