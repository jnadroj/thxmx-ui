import styled from '@emotion/styled';
import { THXMX_MODAL_TITLE_FONT_SIZE, THXMX_MODAL_CONTENT_FONT_SIZE } from './types';

export const ContentContainer = styled.div({
    width: '70%',
    margin: '0 auto',
});

type SizeContent = 'sm' | 'm' | 'lg';

export const HeaderContent = styled.h3<{ size: SizeContent }>(({ size }) => ({
    fontWeight: 'bold',
    fontSize: THXMX_MODAL_TITLE_FONT_SIZE[size] - 12 + 'px',
    textAlign: 'center',
    margin: 0,
    marginBottom: '24px',
    '@media (min-width: 768px)': { fontSize: THXMX_MODAL_TITLE_FONT_SIZE[size] },
}));

export const BodyContent = styled.p<{ size: SizeContent }>(({ size }) => ({
    fontSize: THXMX_MODAL_CONTENT_FONT_SIZE[size] - 2 + 'px',
    textAlign: 'center',
    margin: 0,
    marginBottom: '30px',
    '@media (min-width: 768px)': { fontSize: THXMX_MODAL_CONTENT_FONT_SIZE[size] },
}));

export const ActionContainer = styled.div<{ size: SizeContent }>(({ size }) => ({
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& >:nth-of-type(odd)': {
        marginBottom: '10px',
    },
    '@media (min-width: 768px)': {
        '& >:nth-of-type(odd)': {
            marginRight: '50px',
            marginBottom: 0,
        },
        flexDirection: 'row',
    },
}));
