import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddANewService.css';

const AddANewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        reset();
        axios.post('https://fast-taiga-62917.herokuapp.com/plans', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('New Plan Added Successfully.')
                }
        })
    };

    return (
        <div className="add-service">
            <h1 className="fw-bold color my-3">Add a New Touring Spot</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name..." {...register("name")} />
                <input placeholder="Stay..." {...register("stay")} />
                <input placeholder="Location..." {...register("location")} />
                <input placeholder="Rating..." {...register("rating")} />
                <input placeholder="Rent..." {...register("price")} />
                <textarea placeholder="Description..." {...register("description1")} />
                <input placeholder="Card Image Link..." {...register("img1")} />
                <input placeholder="Image in Details1..." {...register("img2")} />
                <input placeholder="Image in Details2..." {...register("img3")} />
                <input className="button addService w-25" placeholder="" type="submit" value="Add This New Plan" />
            </form>
        </div>
    );
};

export default AddANewService;