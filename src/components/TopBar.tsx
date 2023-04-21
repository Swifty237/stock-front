import React from "react";

type topbarProps = {
    topbarTitle: string
}

const TopBar: React.FC<topbarProps> = ({ topbarTitle }) => {
    return (
        <div className="bg-secondary">
            <div className="row justify-content-around">
                <div className="col-8">
                    <h1 className='text-center text-light'>{topbarTitle}</h1>
                </div>

                <div className="col-2 d-flex justify-content-end">
                    <span className="text-light">User name here !</span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;