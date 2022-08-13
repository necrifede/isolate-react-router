import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom';

const SearchEmpty = () => {
    console.log('Outlet: ', Outlet);

    return (
        <>
            <h2>Empty seach</h2>
            <Outlet />
        </>
    );
};

const SearchValue = () => {
    const params = useParams();
    console.log('params: ', params);
    return <>specific value {JSON.stringify(params)}</>;
};

const App = () => (
    <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="search" element={<SearchEmpty />}>
            <Route path=":id" element={<SearchValue />} />
        </Route>
        <Route path="*" element={() => <h1>Not Found Page</h1>} />
    </Routes>
);

export default App;
