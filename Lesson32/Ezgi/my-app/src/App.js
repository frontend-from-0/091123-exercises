import {HeadingL} from './shared-components/typography/HeadingL';
import {RadioInput} from './shared-components/MultipleSelectionElement/RadioInput';
import {MultipleSelectionElement} from './shared-components/MultipleSelectionElement';
import {QuizData} from './data';
import {HeadingS} from './shared-components/typography/HeadingS';
import {BodyM} from './shared-components/typography/BodyM';


export const App = () => {
	return (
		<main>
			<div>
        <HeadingL title='Welcome to the' />
        <HeadingL title='Frontend Quiz!' bold />
				{/* <h1>
					Welcome to the <span className='text-bold'>Frontend Quiz!</span>
				</h1> */}
				<HeadingS title= 'Pick a subject to get started' />
				<BodyM body= 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.' />
			</div>
			<MultipleSelectionElement>
        {QuizData.map(category => {
          <RadioInput name={category.categoryName.toLowerCase()} title={category.categoryName} inputGroupName='category'/>
        })}
        {/* <RadioInput name='html' title='HTML' inputGroupName='category'/>
        <RadioInput name='css' title='CSS' inputGroupName='category'/>
        <RadioInput name='javascript' title='Javascript' inputGroupName='category'/>
        <RadioInput name='accessibility' title='Accessibility' inputGroupName='category'/> */}
			</MultipleSelectionElement>
		</main>
	);
};
