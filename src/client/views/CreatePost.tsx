import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../services/fetchData'; 

interface CreatePostProps {}

const CreatePost = (props: CreatePostProps) => {
    const navigate = useNavigate();
    const [value, setValue] = useState<string>(''); 

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        fetchData('/api/chirps', 'POST', { body: value})
        .then(data => navigate(`/chirps/${data.id}`));
    }

    return(
        <main className="container mt-5">
            <section className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <form className="p-4 shadow border">
                        <label htmlFor="body">What Are You Thinking About?</label>
                        <input 
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            type="text" 
                            className='form-control' 
                            placeholder='Write Your Post Here'
                        />
                        <button onClick={handleSubmit} className="mt-3 btn btn-primary">Add Chirp</button>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default CreatePost;