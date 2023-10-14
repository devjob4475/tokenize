import { Box } from '@mui/material';
import React from 'react'
import { input } from '../../data/input';
import { useDataContext } from '../../context';
import {formatCreditCardNumber} from '../../utils'

export default function Index(props) {
    const { data, setData } = useDataContext();

    return (
        <>
        <Box>
           {input.map((field) => (
            <div key={field.key}>
              <Box>{field.name}</Box>
              <input value={field.key === "creditcard" ? formatCreditCardNumber(data[field.key]) : data[field.key]}
                onChange={(e) => {const input = e.target.value; if (field.key === "creditcard") {if (input.length <= 19) {
                      const formattedInput = formatCreditCardNumber(input);
                      setData((prevData) => ({ ...prevData, [field.key]: formattedInput }));
                    }
                  } else {setData((prevData) => ({ ...prevData, [field.key]: input }));
                  }
                }}
              />
            </div>
            ))}
        </Box>
        </>
    )
}
