import * as React from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';
import {Style} from '../style';
import {create} from 'apisauce';

const QuoteStore = [
  {
    Quote: 'Awareness is the greatest agent for change.',
    Author: 'Eckhart Tolle',
  },
  {
    Quote: 'Hate the sin, love the sinner',
    Author: 'Mahatma Gandhi',
  },
  {
    Quote:
      'A mistake is only an error, it becomes a mistake when you fail to correct it',
    Author: 'John Lennon',
  },
  {
    Quote:
      'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment',
    Author: 'Gautama Buddha',
  },
  {
    Quote: 'Compassion is the radicalism of our time',
    Author: 'Dalai Lama',
  },
  {
    Quote: 'None but ourselves can free our minds',
    Author: 'Bob Marley',
  },
  {
    Quote: 'Knowledge speaks, but wisdom listens',
    Author: 'Jimi Hendrix',
  },
];

export default function Quote() {
  const randomQuote = QuoteStore[Math.floor(Math.random() * QuoteStore.length)];
  return (
    <View style={Style.quoteBlock}>
      <Text style={Style.quote}>{randomQuote.Quote}</Text>
      <Text style={{alignSelf: 'flex-end'}}>-{randomQuote.Author}</Text>
    </View>
  );
}
