import React, { useState } from 'react';
import { Form, Input, Grid } from 'semantic-ui-react';
import { useSubstrate } from './substrate-lib';
import { TxButton } from './substrate-lib/components';

export default function Main (props) {
  const { api } = useSubstrate();
  const { accountPair } = props;

  const [status, setStatus] = useState(null);
  const [formState, setFormState] = useState({ otherSignatories: null, remark: null});

  const onChange = (_, data) =>
    setFormState(prev => ({ ...prev, [data.state]: data.value }));

  const { otherSignatories, remark} = formState;

  return (
    <Grid.Column width={14}>
      <h3>Immediately dispatch a multi-signature call using a single approval from the caller `asMultiThreshold1`</h3>
      <Form>
        <Form.Field>to make some <b>on-chain remark</b></Form.Field>
        <Form.Field>
          <Input
            fluid
            label='Signatories'
            type='text'
            placeholder='Any Signatories address'
            state='otherSignatories'
            onChange={onChange}
          />
        </Form.Field>

        <Form.Field>
          <Input
            fluid
            label='Remark'
            type='text'
            placeholder='Remark'
            state='remark'
            onChange={onChange}
          />
        </Form.Field>

        <Form.Field style={{ textAlign: 'center' }}>
          <TxButton
            accountPair={accountPair}
            label='Submit'
            type='SIGNED-TX'
            setStatus={setStatus}
            attrs={{
              palletRpc: 'multisig',
              callable: 'asMultiThreshold1',
              inputParams: [ [otherSignatories], api.tx.system.remark(remark)],
              paramFields: [true, true]
            }}
          />
        </Form.Field>
        <div style={{ overflowWrap: 'break-word' }}>{status}</div>
      </Form>
    </Grid.Column>
  );
}
