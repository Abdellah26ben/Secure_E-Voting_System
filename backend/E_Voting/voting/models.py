
import uuid

from django.db import models
from django.conf import settings



# Create your models here.
class Election(models.Model):
    election_generated_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    election_name = models.CharField(max_length=350)
    election_start = models.DateTimeField()
    election_end = models.DateTimeField()
    election_duration = models.DurationField()

class Positions(models.Model):
    election_position_name = models.CharField(max_length=350)
    election_position_id = models.UUIDField(primary_key=True,default=uuid.uuid4 , editable=False)
    position_election = models.ForeignKey(Election, on_delete=models.CASCADE)

class Candidates(models.Model):
    election_candidate_name = models.CharField(max_length=350)
    election_candidate_id = models.UUIDField(primary_key=True,default=uuid.uuid4, editable=False)
    election_name = models.ForeignKey(Election, on_delete=models.CASCADE)
    election_position = models.ForeignKey(Positions,on_delete=models.CASCADE)

class Votes(models.Model):
    election_vote_id = models.UUIDField(primary_key=True,default=uuid.uuid4, editable=False)
    election = models.ForeignKey(Election, on_delete=models.CASCADE)
    election_candidate = models.ForeignKey(Candidates,on_delete=models.CASCADE)
    election_position = models.ForeignKey(Positions,on_delete=models.CASCADE)
    voter = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

