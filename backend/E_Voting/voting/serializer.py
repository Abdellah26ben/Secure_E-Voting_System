from .models import Election, Positions, Candidates, Votes
from rest_framework import serializers
from django.contrib.auth import authenticate


# Election Serializer
class ElectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Election
        fields = ('election_generated_id', 'election_name', 'election_start', 'election_end', 'election_duration')

# Position Serializer
class PositionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Positions
        fields = ('election_position_name','election_position_id','position_election')

# Candidates Serializer
class CandidateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Candidates
        fields = ('election_candidate_id','election_candidate_name','election_name','election_position')

# Voter Serializer
class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Votes
        fields = '__all__'
