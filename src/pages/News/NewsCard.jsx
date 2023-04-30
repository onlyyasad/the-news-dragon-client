import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ singleNews }) => {
    const { _id, title, details, image_url, category_id, author, rating, total_view } = singleNews;
    const { img, name, published_date } = author;

    
    return (
        <Card className='mb-3'>
            <Card.Header className='d-flex align-items-center gap-2'>
                <div>
                    <Image style={{ width: "40px" }} src={img} roundedCircle />
                </div>
                <div className='flex-grow-1'>
                    <h6 className='mb-0'>{name}</h6>
                    <p className='mb-0'>{moment(published_date).format("DD-MM-YYYY")}</p>
                </div>
                <div>
                    <FaRegBookmark /> <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length >= 250? <>{details.slice(0,250)} <Link to={`/news/${_id}`}>Read More</Link> </>: details}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center gap-2'>
                    <Rating
                        placeholderRating={rating?.number}
                        readonly
                        initialRating={rating?.number}
                        emptySymbol={<FaRegStar className="text-warning"/>}
                        placeholderSymbol={<FaRegStar className="text-warning"/>}
                        fullSymbol={<FaStar className="text-warning"/>}
                    />
                    <p className='mb-0'>{rating?.number}</p>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <FaEye/>
                    <p className='mb-0'>{total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;