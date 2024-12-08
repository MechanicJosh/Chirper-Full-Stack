import React, { useState, useEffect } from 'react';
import {fetchData} from '../services/fetchData';
import type { IChirp } from "../types";
import {Link} from 'react-router-dom';

interface HomeProps {}

const Home = (props: HomeProps) => {
    const [list, setList] = useState<IChirp[]>([]);

    useEffect(() => {
        fetchData('/api/chirps')
        .then(list => setList(list));
    }, []);

    return(
        <main className="container mt-5">
            <section className="row justify-content-center">
                <div className='col-12 col-md-6'>
                    <ul className="list-group">
                        {list.map(chirp => (
                            <li className='list-group-item d-flex justify-content-between align-items-center' key={`chirp-id-${chirp.id}`}>
                                <span>{chirp.body}</span>
                                <Link to={`/chirps/${chirp.id}`} className='btn btn-sm btn-secondary'>Details</Link>
                            </li>
                        ))}
                        </ul>
                    </div>
            </section>
        </main>
    )
}

export default Home;