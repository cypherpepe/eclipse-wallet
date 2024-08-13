import IconTransactionSent from '../assets/images/IconTransactionSent.png';
import IconTransactionReceived from '../assets/images/IconTransactionReceived.png';
import IconTransactionSwap from '../assets/images/IconTransactionSwap.png';
import IconTransactionInteraction from '../assets/images/IconTransactionInteraction.png';
import IconTransactionPaid from '../assets/images/IconTransactionPaid.png';
import IconTransactionUnknown from '../assets/images/IconTransactionUnknown.png';
import IconTransactionResultSuccess from '../assets/images/IconTransactionResultSuccess.png';
import IconTransactionResultWarning from '../assets/images/IconTransactionResultWarning.png';
import IconTransactionResultFail from '../assets/images/IconTransactionResultFail.png';
import IconTransactionCreating from '../assets/images/IconTransactionCreating.png';
import IconTransactionSending from '../assets/images/IconTransactionSending.gif';

const QTY_WORDS = [12, 24];
const MIN_WORD = 3;

export const validateSeedPhrase = seedPhrase =>
  seedPhrase.length &&
  QTY_WORDS.includes(seedPhrase.split(' ').length) &&
  seedPhrase.split(' ').every(word => word.length >= MIN_WORD);

export const getShortAddress = address =>
  address && `${address.substr(0, 4)}...${address.substr(-4)}`;

export const TRANSACTION_STATUS = {
  FAIL: 'fail',
  SUCCESS: 'success',
  WARNING: 'warning',
  CREATING: 'creating',
  SENDING: 'sending',
  LISTING: 'listing',
  UNLISTING: 'unlisting',
  CREATING_OFFER: 'creating-offer',
  CANCELING_OFFER: 'canceling-offer',
  BUYING: 'buying',
  SWAPPING: 'swapping',
  BRIDGING: 'bridging',
  BRIDGE_SUCCESS: 'bridge_success',
};

const transactionIcons = {
  sent: IconTransactionSent,
  received: IconTransactionReceived,
  swap: IconTransactionSwap,
  interaction: IconTransactionInteraction,
  paid: IconTransactionPaid,
  unknown: IconTransactionUnknown,
  success: IconTransactionResultSuccess,
  warning: IconTransactionResultWarning,
  fail: IconTransactionResultFail,
  creating: IconTransactionCreating,
  sending: IconTransactionSending,
  inProgress: IconTransactionSending,
  swapping: IconTransactionSending,
  listing: IconTransactionSending,
  unlisting: IconTransactionSending,
  'creating-offer': IconTransactionSending,
  'canceling-offer': IconTransactionSending,
  buying: IconTransactionSending,
  burning: IconTransactionSending,
};


export const getTransactionImage = (transactionType) =>
  transactionIcons[transactionType] || IconTransactionSent;

export const getNonListedTokens = (balance, nfts) =>
  balance.items?.filter((token) => !token.name && Object.values(nfts).includes(token.mint));

export const getListedTokens = (balance) =>
  balance.items?.filter((token) => token.name);

export const mergeImportedTokens = (tokens, activeTokens) =>
  tokens.filter((token) => {
    if (token.amount > 0 || token.address === 'eth') {
      return true;
    }
    const importedToken = activeTokens[token.address];
    return importedToken?.imported || false;
  });
