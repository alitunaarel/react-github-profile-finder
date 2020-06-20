import React, { useState } from 'react'
import DisplayTable from './DisplayTable';

const Profile = () => {

    const [data, setData] = useState({});
    const [userName, setUserName] = useState('');
    const [repositories, setRepositories] = useState([]);

    const onChangeHandler = e => {
        setUserName(e.target.value);
    }
    const submitHandler = async e => {
        e.preventDefault();

        const profile = await fetch(`https://api.github.com/users/${userName}`);
        const profileJson = await profile.json();
        // console.log(profileJson)

        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();
        //console.log(repoJson)

        if (profileJson) {
            setData(profileJson);
            setRepositories(repoJson);
        }

    }
    return (
        <div>
            <div className="ui search">
                <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search a UserName" value={userName} onChange={onChangeHandler} />
                    <i className="search icon"></i>
                </div>
                <div className="results"></div>


                <button className="ui secondary button" type="submit" onClick={submitHandler}>
                    <i className="github icon"></i> Search
            </button>
            </div>

            <DisplayTable data={data} repositories={repositories} />



        </div>
    )
}
export default Profile