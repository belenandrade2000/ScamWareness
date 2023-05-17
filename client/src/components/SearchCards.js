import React, { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { SAVE_CARD } from '../utils/mutations';
import { saveCardIds, getSavedCardIds } from '../utils/localStorage';

import Auth from '../utils/auth';

const SearchCards = () => {
  // create state for holding returned api data
  const [searchedCards, setSearchedCards] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved Card values
  const [savedCards, setSavedCards] = useState(getSavedCardIds());

  const [saveCard, { error }] = useMutation(SAVE_CARD);

  // set up useEffect hook to save `savedCards` list to localStorage on component unmount
  
  useEffect(() => {
    return () => saveCard(savedCards);
  });

  // create method to search for cards and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await fetch(
        `//insert link or file path here//`
      );

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const cardData = items.map((card) => ({
        cardId: card.id,
        title: card.title,
        description: card.description,
        image: card.imageLinks?.thumbnail || '',
      }));

      setSearchedCards(cardData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a card to our database
  const handleSaveCard = async (cardId) => {
    // find the card in `searchedCards` state by the matching id
    const cardToSave = searchedCards.find((card) => card.cardId === cardId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveCard({
        variables: { cardData: { ...cardToSave } },
      });
      console.log(saveCardIds);
      saveCardIds([...saveCardIds, cardToSave.cardId]);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Search for Cards!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a card"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className='pt-5'>
          {searchedCards.length
            ? `Viewing ${searchedCards.length} results:`
            : 'Search for a card'}
        </h2>
        <Row>
          {searchedCards.map((card) => {
            return (
              <Col md="4">
                <Card key={card.cardId} border="dark" className='mb-3'>
                  {card.image ? (
                    <Card.Img
                      src={card.image}
                      variant="top"
                    />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={saveCardIds?.some(
                          (savedId) => savedId === card.cardId
                        )}
                        className="btn-block btn-info"
                        onClick={() => handleSaveCard(card.cardId)}
                      >
                        {saveCardIds?.some((savedId) => savedId === card.cardId)
                          ? 'Card Already Saved!'
                          : 'Save This Card!'}
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SearchCards;
