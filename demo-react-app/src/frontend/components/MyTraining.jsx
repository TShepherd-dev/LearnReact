import {useEffect} from 'react';

export default function MyTraining() {
    const userName = 'Tim'; // example dependency for useEffect

    useEffect(() => {
        // created() + mounted() - run once
        console.log('MyTraining component mounted - ' + userName);

        return () => {
            // beforeDestroy() + unmounted() - run once
            console.log('MyTraining component will unmount - ' + userName);
        };
    }, []);

    return (
        <div className="my-training">
            <h2>My Training</h2>
        </div>
    );
}