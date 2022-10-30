// @TODO - FOR NOW - use the public API for sandbox use of the stripe api.
const STRIPE_SECRET = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc';
const EXPRESS_PORT = 3000;

// const stripe = require('stripe')(STRIPE_SECRET);
// const express = require('express');
import stripe from 'stripe';
import express from 'express';

const app = express();

app.get('/user-billing-status', (req, res) => {
  console.log('REQ', req.headers);
  console.log('auth', req.headers?.authorization);
  res.json({status: 'Broken'});
});

app.get('/user-name', (req, res) => {
  res.send('Charlie');
});

app.listen(EXPRESS_PORT, () => {
  console.log("RUNNING EXPRESS");
});
