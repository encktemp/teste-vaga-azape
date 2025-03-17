
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type DateFilterProps = {
  onDateChange: (startDate: Date | undefined, endDate: Date | undefined) => void;
};

const DateFilter: React.FC<DateFilterProps> = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleApply = () => {
    onDateChange(startDate, endDate);
    setIsCalendarOpen(false);
  };

  const handleClear = () => {
    setStartDate(undefined);
    setEndDate(undefined);
    onDateChange(undefined, undefined);
    setIsCalendarOpen(false);
  };

  const getDateRangeText = () => {
    if (startDate && endDate) {
      return `${format(startDate, 'dd/MM/yyyy')} - ${format(endDate, 'dd/MM/yyyy')}`;
    } else if (startDate) {
      return `${format(startDate, 'dd/MM/yyyy')} - Selecione`;
    } else {
      return 'Selecione um período';
    }
  };

  return (
    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          className="flex justify-between w-72 border-gray-300 hover:border-azsuite-coral"
        >
          <span className="truncate">{getDateRangeText()}</span>
          <CalendarIcon className="h-4 w-4 ml-2 text-gray-500" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <div className="p-4 space-y-4">
          <div className="grid gap-2">
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium">Data inicial</span>
              <Calendar
                mode="single"
                selected={startDate}
                onSelect={setStartDate}
                locale={ptBR}
                className="border rounded-md"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium">Data final</span>
              <Calendar
                mode="single"
                selected={endDate}
                onSelect={setEndDate}
                locale={ptBR}
                disabled={(date) => startDate ? date < startDate : false}
                className="border rounded-md"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={handleClear}>
              Limpar
            </Button>
            <Button onClick={handleApply} className="bg-azsuite-coral hover:bg-azsuite-coral/90">
              Aplicar
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DateFilter;
