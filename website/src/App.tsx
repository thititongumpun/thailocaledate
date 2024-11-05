import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { convertToThaiLocale, FormatMonth } from 'thailocaledate';

import { lazy } from 'react';

const ResultComponent = lazy(() => import('./components/result'));

function App() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-lg font-bold">thailocaledate</h1>
      <h2 className="text-md font-extralight">
        thailocaledate accept parameter date format YYYY-MM-DD
      </h2>
      <div className="pt-3">
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'justify-start text-left font-normal w-full',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon />
              {date ? format(date, 'PPP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              onDayClick={() => setIsOpen(!open)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <p className="text-md p-2">Selected Date: {JSON.stringify(date)}</p>
      {date && (
        <ResultComponent
          results={[
            {
              functionName: 'convertToThaiLocale(date, { numeric: false })',
              dateString: convertToThaiLocale(date, { numeric: false }),
            },
            {
              functionName: 'convertToThaiLocale(date, { numeric: true })',
              dateString: convertToThaiLocale(date, { numeric: true }),
            },
            {
              functionName:
                'convertToThaiLocale(date, { numeric: false, formatMonth: FormatMonth.Long })',
              dateString: convertToThaiLocale(date, {
                numeric: false,
                formatMonth: FormatMonth.Long,
              }),
            },
            {
              functionName:
                'convertToThaiLocale(date, { numeric: true, formatMonth: FormatMonth.Long })',
              dateString: convertToThaiLocale(date, {
                numeric: true,
                formatMonth: FormatMonth.Long,
              }),
            },
          ]}
        />
      )}
    </div>
  );
}

export default App;
