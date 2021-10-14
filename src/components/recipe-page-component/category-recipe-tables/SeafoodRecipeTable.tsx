import React from 'react';
import { Table } from 'react-bootstrap';
import StuffedFlounderRecipeBtn from './../recipe-buttons/seafood-category-button/StuffedFlounderRecipeBtn';
import BakedRedSnapperRecipeBtn from './../recipe-buttons/seafood-category-button/BakedRedSnapper';

const SeafoodRecipeTable = () => {
    return (
        <div>
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Recipe Name</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Stuffed Flounder</td>
                            <td><StuffedFlounderRecipeBtn /></td>
                        </tr>
                        <tr>
                            <td>Baked Red Snapper</td>
                            <td><BakedRedSnapperRecipeBtn /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default SeafoodRecipeTable;