import { HelloWorldProps } from '../models/helloworld';

const App = (props: HelloWorldProps): JSX.Element => {
    const { userName, lang } = props;
    return (
        <h1>
            Hey
            {' '}
            {userName}
            we are using
            {' '}
            {lang}
        </h1>
    );
};

export default App;
