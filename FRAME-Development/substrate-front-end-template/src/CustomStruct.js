import React, { useEffect, useState } from 'react';
import { Form, Input, Grid, Card, Statistic } from 'semantic-ui-react';

import { useSubstrate } from './substrate-lib';
import { TxButton } from './substrate-lib/components';

function Main (props) {
  const { api } = useSubstrate();
  const { accountPair } = props;

  // The transaction submission status
  const [status, setStatus] = useState('');

  // The currently stored value
  const [currentCharacter, setCharacter] = useState(0);
  const [formCharacter, setFormCharacter] = useState(0);

  const [currentClass, setClass] = useState('');
  const [formClass, setFormClass] = useState('');

  useEffect(() => {
    let unsubscribe;
    api.query.templateModule.charcData(newValue => {
      console.log(newValue);
      if (newValue.isNone) {
        setCharacter('');
        setClass('');
      } else {
        setCharacter(newValue.charc_name.toHuman());
        setClass(newValue.charc_class.toHuman());
      }
    }).then(unsub => {
      unsubscribe = unsub;
    })
      .catch(console.error);

    return () => unsubscribe && unsubscribe();
  }, [api.query.templateModule]);

  return (
    <Grid.Column width={8}>
      <h1> Marvel Comics Characters </h1>
      <Card centered>
        <Card.Content textAlign='center'>
          <Statistic
            label='Current Character'
            value={currentCharacter}
          />
             <Statistic
            label='Current Class'
            value={currentClass}
          />
        </Card.Content>
      </Card>
      <Form>
        <Form.Field>
          <Input
            label='Character'
            state='newCharacter'
            type='text'
            onChange={(_, { value }) => setFormCharacter(value)}
          />
        </Form.Field>
        <Form.Field>
          <Input
            label='Class'
            state='newClass'
            type='text'
            onChange={(_, { value }) => setFormClass(value)}
          />
        </Form.Field>
        <Form.Field style={{ textAlign: 'center' }}>
          <TxButton
            accountPair={accountPair}
            label='Store Marvel Character'
            type='SIGNED-TX'
            setStatus={setStatus}
            attrs={{
              palletRpc: 'templateModule',
              callable: 'storeMarvelCharacters',
              inputParams: [{"charc_name":formCharacter,"charc_class":formClass}],
              paramFields: [true]
            }}
          />
        </Form.Field>
        <div style={{ overflowWrap: 'break-word' }}>{status}</div>
      </Form>
    </Grid.Column>
  );
}

export default function TemplateModule (props) {
  const { api } = useSubstrate();
  return (api.query.templateModule && api.query.templateModule.charcData
    ? <Main {...props} /> : null);
}
