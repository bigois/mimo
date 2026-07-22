const LocationInfo = ({ title, location }) => {
    const { pathname, search, state } = location;
    const params = new URLSearchParams(search);
    const subject = params.get('subject');
    const name = params.get('name');

    return (
        <>
            <h1>{title}</h1>
            <ul>
                <li>Path: {pathname}</li>
                <li>State: {state ? state.source : 'Empty'}</li>
                <li>Parameters: {search}
                    <ul>
                        {subject ? <li>Subject: {subject}</li> : null}
                        {name ? <li>Name: {name}</li> : null}
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default LocationInfo;
