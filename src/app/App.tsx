import classNames from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/routes';

function App() {
    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <Navbar />
                <div className={classNames('content-page')}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
