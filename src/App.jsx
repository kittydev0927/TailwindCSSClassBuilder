import { createSignal, Show } from "solid-js";
import { HopeProvider, Grid, GridItem, Text, Button, Input, InputGroup, InputLeftAddon } from "@hope-ui/solid";

function App() {
  const [width, setWidth] = createSignal('200');
  const [height, setHeight] = createSignal('100');
  const [bgColor, setBgColor] = createSignal('red-600');
  const [textSize, setTextSize] = createSignal('lg');
  const [border, setBorder] = createSignal('2');

  const [isButton, setIsButton] = createSignal(false);

  const tailWindClassName = {    
    width: 'w-['+ width() +'px] ',
    height: 'h-['+ height() +'px] ',
    bgcolor: 'bg-'+ bgColor() +' ',
    textSize: 'text-'+ textSize() +' ',
    border: 'border-'+ border() +' '
  }

  console.log(width())
  
  const className = 'class="'+ tailWindClassName.width + tailWindClassName.height + tailWindClassName.bgcolor + tailWindClassName.border +'"';
  const elementName = {
    start: '<Button class = "w-'+[width()+'px ']+' '+'w-'+[bgColor()+' ']+'">',
    text: 'Button',
    end: '</Button>'
  }
  const button =''+elementName.start + elementName.text + elementName.end+'';
 
  return (
    <HopeProvider>
      <Grid
        h="$screenH"
        templateRows="repeat(16, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap="1px"
        className="bg-slate-900"
      >
        <GridItem rowSpan={1} colSpan={5} bg="#11181C" className="rounded-md border-2"></GridItem>
        <GridItem rowSpan={14} colSpan={1} bg="#11181C" className="rounded-md border-2 p-4">
          <Button w="100%" h="$7" className="mt-1 cursor-pointer" onClick={() => setIsButton(!isButton())}>Button</Button>     
        </GridItem>
        <GridItem colSpan={2} rowSpan={9} bg="#04313C" className="rounded-md border-2 p-2 overflow-hidden">
        <Show when={isButton()} fallback={''}>         
          <Button w={width()+'px'} h={height()+'px'} classList={'bg-'+bgColor()}>Button</Button>
        </Show>
        </GridItem>
        <GridItem colSpan={2} rowSpan={9} bg="#04313C" className="rounded-md border-2 text-white p-2">
          <Show when={isButton()} fallback={''}>
            <Text>{'<Button class = "w-['+[width()+'px] ']+' '+'h-['+[height()+'px']+']">' }</Text>
            <Text>&nbsp&nbsp {'Button'}</Text>
            <Text>{'</Button>'}</Text>
          </Show>
        </GridItem>
        <GridItem colSpan={4} rowSpan={5} bg="#00000003" className="rounded-md border-2 p-2">
         <Show when={isButton()} fallback={''}> 
          <InputGroup className="mt-2">
              <InputLeftAddon>Width</InputLeftAddon>
              <Input type="text" color="white" 
                onInput={e => setWidth(e.target.value)}
                placeholder={width()}
                size="sm"              
              />
            </InputGroup>
            <InputGroup className="mt-2">
              <InputLeftAddon>Height</InputLeftAddon>
              <Input type="text" color="white" 
                onInput={e => setHeight(e.target.value)}
                placeholder={height()}
                size="sm"
              />
            </InputGroup>
          </Show>
        </GridItem>
        <GridItem rowSpan={1} colSpan={5} bg="#11181C" className="rounded-md border-2"></GridItem>
      </Grid>
    </HopeProvider>
  );
}

export default App;
