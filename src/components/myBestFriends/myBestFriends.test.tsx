import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MisMejoresAmigos from './myBestFriends';

test('renders Mis mejores amigos title', () => {
  render(<MisMejoresAmigos/>);
  const titleElement = screen.getByText(/Mis mejores amigos/i); // Busca el texto exacto "Mis mejores amigos"
  expect(titleElement).toBeInTheDocument();
});
